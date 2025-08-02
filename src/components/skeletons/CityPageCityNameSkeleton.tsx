const CityPageCityNameSkeleton = () => {
    return (
        <div className="flex justify-between items-center">
            {/* Skeleton for City Name */}
            <div className="relative bg-gray-700 rounded-md w-64 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-slide-infinite" />
            </div>

            {/* Skeleton for Favorite Button */}
            <div className="relative bg-gray-700 rounded-md w-8 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-slide-infinite" />
            </div>
        </div>
    )
}

export default CityPageCityNameSkeleton;