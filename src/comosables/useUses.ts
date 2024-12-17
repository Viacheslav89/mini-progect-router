import type { User } from "./../type";
import { ref } from "vue";
import axios from 'axios';


const users = ref<User[]>([]);

export const useUser = () => {
    const fetchUser = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            users.value = response.data;
        } catch (err) {
            alert(err);
        }
    }

    return {
        fetchUser,
        users,
    }
};