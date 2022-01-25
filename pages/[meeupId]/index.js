import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
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

export default MeetupDetails;
