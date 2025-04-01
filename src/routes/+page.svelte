<script lang="ts">
	import { drivers, leagues, teams } from '$lib/data';

	// Helper functions
	function getLeague(leagueId: string) {
		return leagues.find((l) => l.id === leagueId);
	}

	function getTeam(teamId: string) {
		return teams.find((t) => t.id === teamId);
	}

	function calculateAge(dateOfBirth: string) {
		const today = new Date();
		const birthDate = new Date(dateOfBirth);
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}

	// Sort drivers by active status and then alphabetically
	$: sortedDrivers = [...drivers]
		.sort((a, b) => {
			if (a.isActive !== b.isActive) return b.isActive ? 1 : -1;
			return a.name.localeCompare(b.name);
		})
		.map((driver) => ({
			...driver,
			careerHistory: [...driver.careerHistory].sort((a, b) => b.year - a.year)
		}));
</script>

<div class="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h1 class="mb-8 text-center text-4xl font-bold text-gray-900">Road to F1</h1>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each sortedDrivers as driver}
				{@const currentTeam = driver.currentTeamId ? getTeam(driver.currentTeamId) : null}
				<div class="overflow-hidden rounded-lg bg-white shadow-lg">
					<!-- Driver Header -->
					<div
						class="flex items-center space-x-4 p-4 text-white"
						style="background-color: {currentTeam?.primaryColor || '#1a1a1a'}"
					>
						<img
							src={driver.photoUrl}
							alt={driver.name}
							class="h-16 w-16 rounded-full border-2 border-white object-cover"
						/>
						<div class="flex-1">
							<h2 class="text-lg font-bold">{driver.name}</h2>
							<p class="text-sm text-gray-100">
								{driver.nationality} • {driver.dateOfBirth
									? calculateAge(driver.dateOfBirth)
									: 'N/A'} years old
							</p>
							{#if currentTeam}
								<div class="mt-1 flex items-center space-x-2">
									<img src={currentTeam.logoUrl} alt={currentTeam.name} class="h-4 w-auto" />
									<span class="text-xs text-gray-100">{currentTeam.name}</span>
								</div>
							{/if}
						</div>
					</div>

					<!-- Career Timeline -->
					<div class="p-4">
						<h3 class="mb-3 text-sm font-semibold">Career Progression</h3>
						<div class="space-y-3">
							{#each driver.careerHistory as season}
								{@const league = getLeague(season.leagueId)}
								{@const team = getTeam(season.teamId)}
								<div class="flex items-start space-x-3 rounded-lg bg-gray-50 p-3">
									<div class="w-12 text-center">
										<span class="text-sm font-bold">{season.year}</span>
									</div>
									<div class="flex-1">
										<div class="flex items-center space-x-2">
											<img src={league?.photoUrl} alt={league?.name} class="h-4 w-4" />
											<span class="text-xs font-semibold">{league?.name}</span>
										</div>
										<div class="mt-1 flex items-center space-x-2">
											{#if team}
												<img src={team.logoUrl} alt={team.name} class="h-3 w-auto" />
												<span class="text-xs text-gray-600">{team.name}</span>
											{/if}
										</div>
										<p class="mt-1 text-xs text-gray-600">
											Position: {season.position} • Wins: {season.wins} • Podiums: {season.podiums}
										</p>
										{#if season.highlights}
											<div class="mt-1">
												{#each season.highlights as highlight}
													<span
														class="mr-1 mb-0.5 inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-800"
													>
														{highlight}
													</span>
												{/each}
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- Social Media Links -->
					{#if driver.socialMedia}
						<div class="flex space-x-3 px-4 pb-4">
							{#if driver.socialMedia.instagram}
								<a
									href={driver.socialMedia.instagram}
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs text-pink-600 hover:text-pink-700"
								>
									Instagram
								</a>
							{/if}
							{#if driver.socialMedia.twitter}
								<a
									href={driver.socialMedia.twitter}
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs text-blue-400 hover:text-blue-500"
								>
									Twitter
								</a>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
