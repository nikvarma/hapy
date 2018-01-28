import { BaseModel } from "../base/base";
import { TotalCounts } from "../counts/counts";
import { Locations } from "../locations/locations";
import { Countrys } from "../countrys/countrys";
import { UsersTagged } from "../user/users";
import { Images } from "../images/images";
import { Videos } from "../videos/videos";

export class PostsModel extends BaseModel {
    fromid: string;
    toid: string;
    message: string;
    name: string;
    counts: TotalCounts;
    isIViewed: boolean;
    isILiked: boolean;
    location: Locations;
    country: Countrys;
    taggedPeoples: UsersTagged[] = [];
    images: Images[] = [];
    isPainted: boolean;
    paintedColor: string;
    paintID: string;
    videos: Videos;
}