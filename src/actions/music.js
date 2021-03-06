import {GET_RECOMMANDLIST,GET_NEWSONGS_LIST,GET_HOTMUSIC_LIST,GET_SONG_DETAIL,GET_SONGS_LIST} from "../constants/music"

export const getRecommandList=(payload)=>{
  return{
    type:GET_RECOMMANDLIST,
    payload
  }
}

export const getNewsongsList=(payload)=>{
  return{
    type:GET_NEWSONGS_LIST,
    payload
  }
}
export const getHotList=(payload)=>{
  return{
    type:GET_HOTMUSIC_LIST,
    payload
  }
}
export const getSongDetail=(payload)=>{
  return{
    type:GET_SONG_DETAIL,
    payload
  }
}

export const getSongsList=(payload)=>{
  return{
    type:GET_SONGS_LIST,
    payload
  }
}
