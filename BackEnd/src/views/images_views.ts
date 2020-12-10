import Image from "../models/images"

export default {
    render(Image: Image) {
        return {
            id: Image.id,
            url: `http://localhost:3333/uploads/${Image.path}`,
        }
    },

    renderMany(images: Image[]){
        return images.map(imaage => this.render(imaage))
    }
}