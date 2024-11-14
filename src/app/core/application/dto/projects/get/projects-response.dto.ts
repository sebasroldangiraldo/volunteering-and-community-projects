export interface IGetProjectsResponse {
    statusCode: number;
    message:    string;
    data:       Datum[];
    metadata:   Metadata;
};

export interface Datum {
    id:          number;
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    isActive:    boolean;
    organizer:   Organizer;
};

export interface Organizer {
    id:       number;
    email:    string;
    password: string;
    name:     string;
    role:     Role;
    photo:    null | string;
};

export enum Role {
    Organizer = "organizer",
};

export interface Metadata {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
};


