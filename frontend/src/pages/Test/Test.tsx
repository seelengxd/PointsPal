import MerchantCard from '../../component/commons/MerchantCard'

function fillCard(imageUrl: string, title: string, desc: string, isMember: boolean) {
  return (MerchantCard(imageUrl, title, desc, isMember))
}

type merchantInfo = {
  imageUrl: string, 
  title: string, 
  desc: string, 
  isMember: boolean
}

const Test = () => {

  const merchantCards: merchantInfo[] = [
    {imageUrl: "https://static.wixstatic.com/media/b461b7_7cba1dd000f0422a99f98a163eb9ae14~mv2_d_9625_4049_s_4_2.png", title: "ITEA", desc: "ITEA is a tea shop that sells tea", isMember:false},
    {imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", title: "STARBUCKS", desc: "Starbucks is daylight robbery under the guise of a coffee shop", isMember:true},
    {imageUrl: "https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/08/09165704/new-subway%C2%AE-retaurants-logo-5-HR.jpg", title: "SUBWAY", desc: "SUBWAY sells long bread", isMember:true},
    {imageUrl: "https://static.wixstatic.com/media/b461b7_7cba1dd000f0422a99f98a163eb9ae14~mv2_d_9625_4049_s_4_2.png", title: "ITEA", desc: "ITEA is a tea shop that sells tea", isMember:false},
    {imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", title: "STARBUCKS", desc: "Starbucks is daylight robbery under the guise of a coffee shop", isMember:true},
    {imageUrl: "https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/08/09165704/new-subway%C2%AE-retaurants-logo-5-HR.jpg", title: "SUBWAY", desc: "SUBWAY sells long bread", isMember:true}
  ]
  return (
    <div className='flex'>
      <div className="flex flex-wrap m-4 w-screen items-center justify-center" >
      {merchantCards.map(({imageUrl, title, desc, isMember}) => {
        return MerchantCard(imageUrl, title, desc, isMember)
      })}
      </div>
    </div>
  )
  // return (MerchantCard("https://static.wixstatic.com/media/b461b7_7cba1dd000f0422a99f98a163eb9ae14~mv2_d_9625_4049_s_4_2.png", "ITEA", "ITEA is a tea shop that sells tea", false))
};

export default Test;
