
const uploadImage = async (req: any): Promise<void> => {

    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};

const getImages = async (req: any): Promise<void> => {

    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};

const deleteImage = async (req: any): Promise<void> => {

    if (!req.params.id) {
        throw new Error('ID is Not Found');
    }
    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};

export default {
    uploadImage,
    getImages,
    deleteImage
};