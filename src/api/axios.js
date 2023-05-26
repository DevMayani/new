import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-18-224-25-10.us-east-2.compute.amazonaws.com/api/v1/auth'
});