"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "../common/postCard";
import posts from "./posts.json";

export default function MayLikePosts() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <section className="mt-5 relative has-[button]:underline">
            <h1 className="font-bold">You May Like..</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container h-88 !items-start relative [&>*:nth-child(2)]:top-3/7 [&>*:nth-child(3)]:top-3/7"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="px-1"
                deviceType="desktop"
            >
                {posts.map(
                    ({ image, name, description, date, category }, id) => {
                        return (
                            <PostCard
                                imageSrc={image}
                                title={name}
                                desc={description}
                                date={date}
                                category={category}
                                key={id}
                            />
                        );
                    }
                )}
            </Carousel>
            ;
        </section>
    );
}
