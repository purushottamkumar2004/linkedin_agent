class IndexController {
    public async getExample(req: Request, res: Response): Promise<void> {
        res.status(200).json({ message: "This is an example response" });
    }

    public async postExample(req: Request, res: Response): Promise<void> {
        const data = req.body;
        // Process the data as needed
        res.status(201).json({ message: "Data received", data });
    }

    // Add more methods as needed for other endpoints
}

export default new IndexController();