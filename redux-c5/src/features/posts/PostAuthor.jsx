import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import {PropType} from "prop-types"

const PostAuthor = ({ userId }) => {

    PostAuthor.propTypes = {
      userId: PropType.number.isRequired
    }

    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor;