import React from "react";
import ApprovalCard from "../../components/ApprovalCard";
import CommentDetail from "../../components/CommentDetail";
import faker from "faker";

export default function CommentPage() {
    return (
        <div>
            <h1>Comment Page</h1>
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail author="Jake" timeAgo="Today at 19:25" content="Hello"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail author="Hikmet" timeAgo="Yesterday at 18:17" content="Wazzup"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Savage" timeAgo="Today at 13:56" content="React is legendary"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>
            </div>
        </div>
    );
}