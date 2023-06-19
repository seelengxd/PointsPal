type Props = {
  imageUrl?: string;
  className?: string;
};

// Image Credits: Photo by <a href="https://unsplash.com/pt-br/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const Banner = ({ imageUrl, className }: Props) => { 
  const altUrl = "https://images.unsplash.com/photo-1583049308888-b7577644cb4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";

  return <div style={{ backgroundImage: `url(${imageUrl ?? altUrl})` }} className={`w-screen h-64 bg-cover ${className}`} ></div>;
};

export default Banner;
