import platforms from "../data/platforms";

// interface Platform{
//     id: number; 
//     name: string;
//     slug: string;
// }

const usePlatforms = () => ({data: platforms, isLoading : false , error: null})
// ship platforms from api ==> useData<Platform>("/platforms/lists/parents");
export default usePlatforms;