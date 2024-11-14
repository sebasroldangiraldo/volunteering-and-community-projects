export interface IGetProjectResponse {
    statusCode: number;
    message:    string;
    data:       Data;
};

export interface Data {
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
    role:     string;
    photo:    string;
};