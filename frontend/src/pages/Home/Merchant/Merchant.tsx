import Banner from '../../../component/commons/Banner';

const Merchant = () => {
  const imgLinks: string[] = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://plus.unsplash.com/premium_photo-1663852297801-d277b7af6594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  ];

  return (
    <>
      <h1>Merchant</h1>
      {imgLinks.map((link, key) => {
        return <Banner imageUrl={link} key={key} />;
      })}
    </>
  );
};

export default Merchant;
