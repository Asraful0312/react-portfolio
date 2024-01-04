const Heading = ({ description, title }) => {
  return (
    <div className="py-7">
      <h1 className="text-center text-sm">{description}</h1>
      <h1 className="text-center text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default Heading;
