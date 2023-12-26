import genres from "../data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres , isLoading: false , error: null});
// ship genres from api ==> useData<Genre>("/genres")


export default useGenres ;