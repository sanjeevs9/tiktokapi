
export const typeDefs=`
    type User{ 
    id:String
    uniqueId:String
    nickname:String
    secUid:String
    stats:Stat
    avatar:String
    followers:[Follower!]
    following:[Following!]
    posts:[Post!]
    }
    type Stat{
      followerCount:Int
      followingCount:Int
      heart:Int
      heartCount:Int
      videoCount:Int
      diggCount:Int
    }
    type Follower{
      name:String #nickname
      avatar:String #avatarMedium
    }
    type Following{
      name:String #nickname
      avatar:String #avatarMedium
    }
    type Post{
      desc:String #desc
      id:String
      playCount:Int
      commentCount:Int
      shareCount:Int
      collectCount:Int
      diggCount:Int
      comments:[Comment!]
    }
    type Comment{
      text:String
      name:String #user->nickname
    }
    type Query{
      user(uniqueId:String!):User,
      followers(secUid:String!):[Follower!]
      login(email:String,password:String):String
    }
`