const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

    console.log('Start seeding ...');

    const skillsData = await prisma.skills.createMany({
        data: [
            { name: 'JavaScript' },
            { name : 'HTML' },
            { name : 'CSS'},
            { name: 'React' },
            { name : 'MySQL' },
            { name: 'Prisma' },
            { name: 'Node' },
            { name : 'Express' },
            { name : 'Material UI'},
            { name: 'Styled Components' }
        ]
    });

    const projectsData = await prisma.projects.createMany({
        data: [
            {
                name: 'La Bonne Bouffe',
                description: 'Site de bonnes adresses culinaires dans le quartier de Saint-Cyprien',
                logo: 'https://i.postimg.cc/9XyWWw9F/Logo-la-BB.png',
                screenshots: [
                    'https://i.postimg.cc/CMrYFyMJ/Screenshot-labonnebouffe1.png',
                    'https://i.postimg.cc/43GR8sw4/Screenshot-labonnebouffe2.png'
                ],
                link: 'https://maxime-medal.github.io/La_Bonne_Bouffe/index.html'
            },
            {
                name: 'Bike Buster',
                description: 'Site de recherche de vélos en libre service',
                logo: '../resources/bike.png',
                screenshots : [
                    'https://i.postimg.cc/rFYpY0tV/Screenshot-bikebuster1.png',
                    'https://i.postimg.cc/Y0CpdMrL/Screenshot-bikebuster2.png'
                ],
                link: 'https://tlse0921-js-p2-bike-buster-cbheoum7l-bike-buster.vercel.app/'
            },
            {
                name: 'Lyrics Guesser',
                description: "Blind test à partir d'une voix pré-enregistrée",
                logo: 'https://lyrics-guessr-jhdvc2pq7-tbiarneix.vercel.app/assets/logo-transparent.png',
                screenshots: [
                    'https://i.postimg.cc/d1BsRLYK/Screenshot-lyricsguesser1.png',
                    'https://i.postimg.cc/Dw9wn9gR/Screenshot-lyricsguesser2.png'
                ],
                link: 'https://lyrics-guessr-jhdvc2pq7-tbiarneix.vercel.app/'
            },
            {
                name: 'Ma maison des bois',
                description: 'Site de location de maisons forestières',
                logo: 'https://i.postimg.cc/9MdgR2VK/Logo-fondBlanc.png',
                screenshots: [
                    'https://i.postimg.cc/GhZCykyy/Screenshot-mamaisondesbois1.png',
                    'https://i.postimg.cc/FKx588ny/Screenshot-mamaisondesbois2.png'
                ],
                link: 'https://tlse0921-js-p3-ma-maison-des-bois-frontend.vercel.app/'
            }
        ]
    });

    const skillProjectsData = await prisma.skill_projects.createMany({
        data: [
            {
                project_id: 1,
                skill_id: 2
            },
            {
                project_id: 1,
                skill_id: 3
            },
            {
                project_id: 2,
                skill_id: 1
            },
            {
                project_id: 2,
                skill_id: 3
            },
            {
                project_id: 2,
                skill_id: 4
            },
            {
                project_id: 3,
                skill_id: 1
            },
            {
                project_id: 3,
                skill_id: 3
            },
            {
                project_id: 3,
                skill_id: 4
            },
            {
                project_id: 3,
                skill_id: 9
            },
            {
                project_id: 4,
                skill_id: 1
            },
            {
                project_id: 4,
                skill_id: 4
            },
            {
                project_id: 4,
                skill_id: 6
            },
            {
                project_id: 4,
                skill_id: 7
            },
            {
                project_id: 4,
                skill_id: 8
            },
            {
                project_id: 4,
                skill_id: 10
            },
        ]
    });

    const loginData = await prisma.login.create({
        data: {
            user: 'Antonia',
            password: 'wcschool'
        }
    });

    console.log(
        projectsData,
        skillsData,
        skillProjectsData,
        loginData);

    console.log('Seeding finished')
}


main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })