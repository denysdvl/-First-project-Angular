import { Injectable } from '@angular/core'
export interface Content {
    id: number
    title: string
    imgurl: string
    content: string
}

@Injectable({ providedIn: 'root' })
export class DogsService {

    public dogs: Content[] = [
        {
            id: 1,
            title: "Shiba Inu",
            imgurl: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_960_720.jpg",
            content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.` },
        {
            id: 2,
            title: "Husky",
            imgurl: "https://cdn.pixabay.com/photo/2017/01/28/22/13/dog-2016708_960_720.jpg",
            content: `Husky is a general name for a sled-type of dog used in northern regions, differentiated from other sled-dog types by their fast pulling style. They are an ever-changing cross-breed of the fastest dogs`
        },
        {
            id: 3,
            title: "Akita",
            imgurl: "https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986_960_720.jpg",
            content: `The Akita is a medium breed of dog originating from the mountainous regions of northern Japan.`
        }
    ]

}

@Injectable({ providedIn: 'root' })
export class CatsService {

    public cats: Content[] = [
        {
            id: 1,
            title: "Maine Coon",
            imgurl: "https://cdn.pixabay.com/photo/2017/11/09/21/36/maine-coon-2934708__340.jpg",
            content: `The Maine Coon is the largest domesticated cat breed. It has a distinctive physical 
            appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, 
            specifically native to the state of Maine` },
        {
            id: 2,
            title: "Munchkin",
            imgurl: "https://image.shutterstock.com/image-photo/munchkin-cat-smile-face-600w-1279534996.jpg",
            content: `The Munchkin cat or Sausage cat is a newer breed of cat characterized by 
            its very short legs, which are caused by a genetic mutation. `
        },
        {
            id: 3,
            title: "Scottish Fold",
            imgurl: "https://cdn.pixabay.com/photo/2017/02/24/11/11/scottish-2094470_960_720.jpg",
            content: `The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation 
            that affects cartilage throughout the body, causing the ears to "fold", bending forward and down
             towards the front of the head`
        }
    ]

}
@Injectable({ providedIn: 'root' })
export class TravelService {

    public travel: Content[] = [
        {
            id: 1,
            title: "British Columbia",
            imgurl: "https://cdn.pixabay.com/photo/2018/11/01/05/33/british-columbia-3787200__340.jpg",
            content: `British Columbia is the westernmost province of Canada, located between the Pacific Ocean and the Rocky Mountains. 
            With an estimated population of 5.034 million as of 2019, it is Canada's third-most populous province` },
        {
            id: 2,
            title: "Cuba",
            imgurl: "https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800__340.jpg",
            content: `is a country comprising the island of Cuba as well as Isla de la Juventud and several minor archipelagos. 
            Cuba is located in the northern Caribbean where the Caribbean Sea, Gulf of Mexico and Atlantic Ocean meet.`
        },
        {
            id: 3,
            title: "Paris",
            imgurl: "https://cdn.pixabay.com/photo/2015/07/13/14/40/paris-843229__340.jpg",
            content: ` is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles)
             and an official estimated population of 2,140,526 residents as of 1 January 2019.`
        }
    ]

}




