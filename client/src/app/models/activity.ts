export interface IActivity {
    id: string;
    title: string;
    date: string;
    description: string;
    category: string;
    city: string;
    venue: string;
}

export interface IActivityGroup {
    date: string;
    activities: IActivity[];
};