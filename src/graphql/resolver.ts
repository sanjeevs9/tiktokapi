import { UserDetail,FetchFollowers,FetchFollowing,FetchPosts } from '../api';

export const QUERY={Query:{
    user:async(_: any,args:{uniqueId:string})=> User(args) ,
    followers:async (_: any,args:{secUid:string})=> Follower(args) ,
    login:async (_: any,args:{email:string,password:string},context: any)=>{}
    },
  User:{
    followers:async(parent: { secUid: string; })=>{
      const response=await FetchFollowers(parent.secUid);
      const followerList=response.data.userList;      
      const followers=followerList.map((user:any)=>{
          return {name:user.user.nickname,avatar:user.user.avatarMedium}
      })
      return followers
    }
  },

}

//fetch data from the api
async function User(args:{uniqueId:string}){
    try{                  
        //user details
        let response=await UserDetail(args); 
        
        const user=response.data.userInfo.user;
        const stats=response.data.userInfo.stats;
        const secUid=user.secUid;
        
        
        // //followers
        // response=await FetchFollowers(secUid);
        // const followerList=response.data.userList;
       
        
        // const followers=followerList.map((user:any)=>{
        //     return {name:user.user.nickname,avatar:user.user.avatarMedium}
        // })
      
        //followingList
       
        response=await FetchFollowing(secUid);
        const followingList=response.data;
        let following=[]
        if(followingList.total!=0){
            following=followingList.userList.map((user:any)=>{
              return {name:user.user.nickname,avatar:user.user.avatarMedium}
          })
        }

        //posts
        response=await FetchPosts(secUid);
        const postsList= response.data.data.itemList
       
        const posts=postsList.map((post:any)=>{
          return {
            desc:post.desc,
            id:post.id,
            playCount:post.stats.playCount,
            commentCount:post.stats.commentCount,
            shareCount:post.stats.shareCount,
            collectCount:post.stats.collectCount,
            diggCount:post.stats.diggCount
          }
        })
        
        return {
          id: user.id,
          uniqueId: user.uniqueId,
          nickname: user.nickname,
          secUid: user.secUid,
          avatar:user.avatarMedium,
          stats:{
            followerCount:stats.followerCount,
            followingCount:stats.followingCount,
            heart:stats.heart,
            heartCount:stats.heartCount,
            videoCount:stats.videoCount,
            diggCount:stats.diggCount
          },
          // followers:followers,
          following:following,
          posts:posts
        };

      }catch(err){
        console.log(err)
        return "user not found"
      }
}

async function Follower(args:{secUid:string}){
      //followers 
      const secUid=args.secUid
      const response=await FetchFollowers(secUid);
      const followerList=response.data.userList;
      const followers=followerList.map((user:any)=>{
          return {name:user.user.nickname,avatar:user.user.avatarMedium}
      })
      return followers
}