import {filmGenres} from '../fixtures/genres'
export default function selectionFilter({series,films}){

    return{
       series:[
            {title:'Documentaries', data:series?.filter((item)=>item.genre==='documentaries')},
            {title:'Comedies', data:series?.filter((item)=>item.genre==='comedies')},
            {title:'Children', data:series?.filter((item)=>item.genre==='children')},
            {title:'Crime', data:series?.filter((item)=>item.genre==='crime')},
            {title:'Feel Good', data:series?.filter((item)=>item.genre==='feel-good')}
        ]
        ,
        films: filmGenres.map((genre)=>{
            return {
                title:genre,
                data:films?.filter((item)=>item.genre===genre.toLowerCase())}
            })
    }

}