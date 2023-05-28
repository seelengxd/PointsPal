type Props = {
  imageUrl?: string;
};

// Image Credits: Photo by <a href="https://unsplash.com/pt-br/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const Banner = ({ imageUrl }: Props) => {
  return (
    <img
      src={
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      }
      className='w-full'
    ></img>
  );
};

export default Banner;
