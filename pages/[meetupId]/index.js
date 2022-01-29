import { useRouter } from "next/router";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	useRouter();

	return (
		<MeetupDetail
			title="First Meetup"
			address="Some Street 5, some city"
			description="This is a first meetup"
			alt="first meetup"
			image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;
	return {
		props: {
			meetupData: {
				image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
				id: meetupId,
				title: "First Meetup",
				address: "Some Street 5, some city",
				description: "This is the first meetup",
			},
		},
	};
}

export default MeetupDetails;
