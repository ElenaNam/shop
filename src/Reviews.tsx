import { ChangeEvent, useState } from "react"
import avatarIcon from "./assets/img/avatarIcon.svg";

type Review = {
	author: string
	title: string
	text: string
	date: string
	rating: number
}

export const Reviews = () => {
	const [reviews, setReviews] = useState<Review[]>([
		{
		  author: "Jane Cooper",
		  title: "Amazing Product",
		  text: "Lorem Ipsum is simply dummy text",
		  date: "01/01/2021",
		  rating: 4,
		},
		{
		  author: "Max Doodle",
		  title: "Best choice",
		  text: "Various versions have evolved over the years",
		  date: "05/23/2021",
		  rating: 5,
		},
	]);
	const [currentReview, setCurrentReview] = useState<string>("");

	const currentReviewHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.currentTarget.value;
		setCurrentReview(newValue);
	}

	const addReviewHandler = () => {
		const newReview = {
			author: "Jane Cooper",
			title: "Amazing Product",
			text: currentReview,
			date: "05/23/2021",
			rating: 5,
		};
		setReviews([newReview, ...reviews]);
		setCurrentReview('');
	}

	return (
		<>
			<div className="review">
				<h3>Reviews ({reviews.length})</h3>
				<textarea 
					placeholder="Provide your text..."
					value={currentReview}
					onChange={currentReviewHandler}
				></textarea>
				<button onClick={addReviewHandler}>Send review</button>
			</div>
			{reviews.map((r) => {
				return (
					<div className="reviewField">
					<div className="info">
						<div className="user">
						<img src={avatarIcon} alt="" />
						<div className="infoBox">
							<p className="author">{r.author}</p>
							<p className="rating">{r.rating} Rating</p>
						</div>
						</div>
						<div>
						<p className="date">{r.date}</p>
						</div>
					</div>

					<div className="content">
						<p className="title">{r.title}</p>
						<p>{r.text}</p>
					</div>
					</div>
				);
			})}
		</>
		
	);
};