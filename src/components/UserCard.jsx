const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, bio, skills } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="User photo" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        {/* Age */}
        {age && (
          <p>
            <span className="font-semibold">Age:</span> {age}
          </p>
        )}

        {/* Gender */}
        {gender && (
          <p>
            <span className="font-semibold">Gender:</span> {gender}
          </p>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <div>
            <span className="font-semibold">Skills:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((skill, index) => (
                <span key={index} className="badge badge-outline">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bio */}
        {bio && <p>{bio}</p>}

        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
