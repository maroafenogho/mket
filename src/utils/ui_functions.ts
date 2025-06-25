const getPriority = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'text-red-600';
        case 'Medium':
            return 'text-yellow-600';
        case 'Low':
            return 'text-green-600';
        default:
            return 'text-gray-600';
    }
}

export { getPriority }