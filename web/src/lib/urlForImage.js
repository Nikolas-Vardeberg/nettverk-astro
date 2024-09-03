import { sanityClient } from "sanity:client";
import { ImageUrlBuilder } from "@sanity/image-url/";

export const imageBuilder = imageBuilder(sanityClient)

export function urlForImage(source) {
    return imagebuilder.image(source)
}