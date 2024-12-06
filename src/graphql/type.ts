
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
      followerCount:String
      followingCount:String
      heart:String
      heartCount:String
      videoCount:String
      diggCount:String
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
      playCount:String
      commentCount:String
      shareCount:String
      collectCount:String
      diggCount:String
      comments:[Comment!]
    }
    type Comment{
      text:String
      name:String #user->nickname
    }
    type Query{
      user(uniqueId:String!):User,
    }
`