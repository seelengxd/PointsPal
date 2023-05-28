type Props = {
  imageUrl?: string;
};

// Image Credits: Photo by <a href="https://unsplash.com/pt-br/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const Banner = ({ imageUrl }: Props) => {
  return <div style={{ backgroundImage: `url(${imageUrl})` }} className='w-screen h-64 bg-cover'></div>;
};

export default Banner;
