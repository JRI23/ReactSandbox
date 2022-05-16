import React from "react";
import ApprovalCard from "../../components/ApprovalCard";
import CommentDetail from "../../components/CommentDetail";
const { faker } = require('@faker-js/faker');

const avatar1 = faker.image.avatar();
const avatar2 = faker.image.avatar();
const avatar3 = faker.image.avatar();


export default function CommentPage() {
    return (
        <div>
            <h1>Comment Page</h1>
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail author="Tom" timeAgo="Today at 19:25" content="Hello"
                        avatar={avatar1} />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail author="Jezza" timeAgo="Yesterday at 18:17" content="I love React"
                        avatar={avatar2} />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Peter" timeAgo="Today at 13:56" content="React is legendary"
                        avatar={avatar3} />
                </ApprovalCard>
            </div>
        </div>
    );
}