import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <img
                        src={BannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-7">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn bg-[#23BE0A]">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;