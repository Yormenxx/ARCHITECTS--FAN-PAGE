
import img1 from '../assets/images/disco/FORTHOSE.jpg'
import img2 from '../assets/images/disco/HH.jpg'
import img3 from '../assets/images/disco/AOGHU.jpg'
import img4 from '../assets/images/disco/LFLT.jpg'
import img5 from '../assets/images/disco/HOLLOWCROWN.jpg'
import img6 from '../assets/images/disco/RUIN.jpg'

import arch1 from '../assets/images/merch/Architects1.jpg'
import arch2 from '../assets/images/merch/Architects2.png'
import arch3 from '../assets/images/merch/Architects3.png'
import arch4 from '../assets/images/merch/Architects4.png'
import arch5 from '../assets/images/merch/Architects5.png'
import arch6 from '../assets/images/merch/Architects6.png'
import arch7 from '../assets/images/merch/Architects7.png'
import arch8 from '../assets/images/merch/Architects8.png'
import arch9 from '../assets/images/merch/Architects9.png'

import song1 from '../assets/songs/holy.mp3'


export const LINK = [
    {
        name: "home",
        link:"#home"
    },
    {
        name: "songs",
        link:"#song"
    },

    {
        name: "disc",
        link:"#disc"
    },

 

    {
        name: "merch",
        link:"#merch"
    },

    {
        name: "sign up",
        link:"#sign"
    },
]


export const DISC = [

    {
        image:`${img1}`,
        title:"For Those That Wish to Exist",
        year:"2021",
        reproducir:"/forthose"
    },

    {
        image:`${img2}`,
        title:"Holy Hell",
        year:"2018",
        reproducir:"/holy"
    },
    {
        image:`${img3}`,
        title:"All Our Gods Have Abandoned Us",
        year:"2016",
           reproducir:"/augh"
    },
 
    {
        image:`${img4}`,
        title:"Lost Forever // Lost Together",
        year:"2014",
           reproducir:"/lastfor"
    },
    
    {
        image:`${img5}`,
        title:"Hollow Crown",
        year:"2009",
           reproducir:"/crown"
    },
    {
        image:`${img6}`,
        title:"Ruin",
        year:"2007",
           reproducir:"/ruin"
    },
]




export const MERCH = [
  
    {
        image:`${arch2}`,
        title : "Are You Happy Now? (Black) L/S",
        year:"$60.0 USD"
    },
    {
        image:`${arch3}`,
        title : "Are You Happy Now?",
        year:"$60.0 USD"
    },
    {
        image:`${arch4}`,
        title : "Astronaut (Black) T-shirt",
        year:"$45.0 USD"
    },
    {
        image:`${arch5}`,
        title : "All Our Gods Have Abandoned Us",
        year:"$30.0 USD"
    },
    {
        image:`${arch6}`,
        title : "All Our Gods Have Abandoned Us ",
        year:"30.0 USD"
    },
    {
        image:`${arch7}`,
        title : "Set line ",
        year:"$25.0 USD"
    },
    {
        image:`${arch8}`,
        title : "US 2024 Tour (Black) T-shirt",
        year:"$45.0 USD"
    },
    {
        image:`${arch9}`,
        title : "Wolf (Black) L/S T-shirt",
        year:"$60.0 USD"
    },
]


export const SONGS = [
    {
        image : `${img1}`,
        song :"Giving blood",
        band:"Architects",
        album:"for those to wish to exists",
        pathSong:`${song1}`

    },
    {
        image : `${img2}`,
        song :"A wasted hymn",
        band:"Architects",
        album:"Holy hell"
    },
    {
        image : `${img2}`,
        song :"Royal beggars",
        band:"Architects",
        album:"Holy hell"
    },
    {
        image : `${img3}`,
        song :"Mmemento mori",
        band:"Architects",
        album:"All our gods have abadoned us"
    },
    {
        image : `${img1}`,
        song :"Dead butterflies",
        band:"Architects",
        album:"for those to wish to exists"
    }
]
