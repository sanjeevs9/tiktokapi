import axios from "axios"
import { RAPID_KEY, TIKTOK } from "../../api";

export interface Env {
    RAPID_KEY: string;
  }


export async function UserDetail(args:{uniqueId:string}){
    const response=await axios.get(`${TIKTOK}/user/info`,{
      params:{
        "uniqueId":args.uniqueId
      },
      headers:{
        'x-rapidapi-key': RAPID_KEY,
        'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
      }
    })
    return response
  }
  
  export async function FetchFollowers(secUid:string){
    const response=await axios.get(`${TIKTOK}/user/followers`,
      {
        params:{
          "secUid":secUid,
          count:'50',
          minCursor: '0',
      maxCursor: '0'
        },
        headers:{
          'x-rapidapi-key': RAPID_KEY,
          'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
        }
      })
      return response
  }
  
  export async function FetchFollowing(secUid:string){
    const response=await axios.get(`${TIKTOK}/user/followings`,
      {
        params:{
          "secUid":secUid,
          count:'50',
          minCursor: '0',
          maxCursor: '0'
        },
        headers:{
          'x-rapidapi-key': RAPID_KEY,
          'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
        }
      })
      return response
  }
  
  export async function FetchPosts(secUid:string){
    const response=await axios.get(`${TIKTOK}/user/posts`,
      {
        params:{
          secUid:secUid,
          count:'10',
          cursor:'0'
        },
        headers:{
          'x-rapidapi-key': RAPID_KEY,
          'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
        }
      })
      return response
  }