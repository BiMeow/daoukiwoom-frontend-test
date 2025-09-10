export interface MovieType {
	adult?: boolean; // Defaults to true
	backdrop_path: string;
	genre_ids: number[];
	id?: number; // Defaults to 0
	original_language: string;
	original_title: string;
	overview: string;
	popularity?: number; // Defaults to 0
	poster_path: string;
	release_date: string;
	title: string;
	video?: boolean; // Defaults to true
	vote_average?: number; // Defaults to 0
	vote_count?: number; // Defaults to 0
}

export interface GenreType {
	id: number;
	name: string;
}

export interface CollectionType {
	id: number;
	name: string;
	poster_path: string | null;
	backdrop_path: string | null;
}

export interface ProductionCompanyType {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountryType {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguageType {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface MovieDetailType {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection?: CollectionType | null;
	budget: number;
	genres: GenreType[];
	homepage: string;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompanyType[];
	production_countries: ProductionCountryType[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguageType[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
