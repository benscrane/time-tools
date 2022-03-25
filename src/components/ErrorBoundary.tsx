import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.log('Error', error);
        console.log('Error info', errorInfo);
    }

    render() {
        if ((this.state as any).hasError) {
            return <h1>Something went wrong</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;