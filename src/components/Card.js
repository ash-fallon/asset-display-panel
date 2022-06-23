const Card = props => {
  return (
    <div className='w-full h-full rounded-md relative p-8 border-2 bg-white border-neutral-200'>
      {props.children}
    </div>
  );
};

export default Card;
