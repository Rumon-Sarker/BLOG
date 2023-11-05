
const BlogDetails = ({ data }) => {

  return (
    <>
      <div className="container mx-auto">
        <div className="py-[100px]">
          <h2 className="text-[26px] font-semibold">{data?.title}</h2>
          <br />
          <div className="py-5 w-full h-full">
            <img
              src={data?.imgCdn}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <br />
          <div>{(data?.desc)}</div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
