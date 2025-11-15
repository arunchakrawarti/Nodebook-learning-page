 const FacultyCard = ({ name, subject, img }) => (
    <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm hover:shadow-md">
      <div className="relative w-28 h-28 md:h-35 md:w-35 lg:w-55 lg:h-50 rounded-lg overflow-hidden mb-3">
        {img ? (
          <Image src={img} alt={name} fill className="object-cover" />
        ) : (
          <UserIcon className="w-full h-full text-gray-400 p-4" />
        )}
      </div>
      <p className="font-bold">{name}</p>
      <p className="font-urbanist font-medium text-[14px] text-[#193CB8] mt-1">
        {subject}
      </p>
    </div>
  );
export default FacultyCard