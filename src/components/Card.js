const Card = props => {
  return (
    <div className='w-full h-full rounded-md relative p-8 border-2 bg-gray-300'>
      {props.children}
    </div>
  );
};

export default Card;
