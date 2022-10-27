import React from 'react';
import { Link } from 'react-router-dom';

const CoursesName = ({ course }) => {
    console.log(course);
    return (
        <div>
            <Link to={`/course/${course.id}`}>
                 <li className="list-group-item fw-bold mb-2"> 
                    {course.course_name}
                 </li> 
            </Link>
        </div>
    );
};

export default CoursesName;