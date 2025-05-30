<template>
  <div class="bg-gray-900 relative z-10 w-full py-28 text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div>
    <div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div>
    <div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div>
    <div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div>
    <div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>

    <div class="relative bg-gradient-to-br from-[#1e1e2f] via-gray-800 to-[#1a1a2a] rounded-3xl shadow-2xl px-10 py-20 max-w-5xl mx-auto border border-purple-700/30 backdrop-blur-md">
      <img
        src="/data/photo_profile.jpg"
        alt="Photo de profil de Maskulov Costa"
        class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-600 shadow-md mb-8"
      />
      <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
        👋 À propos de moi
      </h2>
      <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Passionné d'informatique depuis mon enfance, j'ai choisi de suivre une voie technique en intégrant le lycée Saint Nicolas en filière STI2D,
        puis l'ESIEA, une école d’ingénieurs spécialisée en informatique. Mon parcours est enrichi d'expériences diverses, allant du service en restauration à la vente et réparation d’appareils Apple,
        où j’ai pu développer mon sens du contact et de la rigueur.
      </p>
      <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
        À travers ces expériences et mon engagement au sein du BDE comme vice-secrétaire général, j’ai renforcé mes compétences en communication,
        en travail d’équipe et en gestion de projet. Mes atouts clés sont la maîtrise de l'anglais, mes compétences techniques en développement web, et ma capacité à collaborer efficacement dans un environnement d’équipe.
      </p>
      <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
        En dehors du développement, je suis passionné par le sport (vélo, roller, escalade, et sports mécaniques comme la F1 et le MotoGP),
        ainsi que par la musique que je pratique avec la basse et la guitare. Ces centres d'intérêt nourrissent ma créativité et mon équilibre personnel.
      </p>
    </div>
  </div>
</template>