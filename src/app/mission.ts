export interface Mission {
    id: string;
    launch_year:string;
    details:string;
    mission_name:string;
    //mission_patch_small:string;
    //rocket_name:string;
    //rocket_type:string;
    //site_name_long:string;
}

export interface Missions extends Array<Mission>{};

