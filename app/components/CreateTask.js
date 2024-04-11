import React, { useState } from 'react';

const inputStyles = "ml-2 border-transparent focus-visible:outline-transparent ";

const CreateTask = ({ closeWindow = undefined }) => {
    const defaultData = {
        taskName: '',
        taskDescription: '',
        completionPeriod: '',
        durationPerDay: '',
        startDate: '',
        startTime: '',
        endDate: '',
        activeDays: '',
    }
    const [formData, setFormData] = useState(defaultData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(">> name: ", name, "value: ", value)
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
        setFormData(defaultData);
    };

    return (
        <div className="p-4 w-[40vw] bg-white rounded-md">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-gray-400">Start a new goal</h1>
                {closeWindow &&
                    <button
                        onClick={() => closeWindow(false)}
                        className="transition hover:bg-gray-400 text-gray-600 hover:text-white px-2 py-1 rounded cursor-pointer"
                    >Close</button>
                }
            </div>
            <hr className="mb-6 border" />
            <form onSubmit={handleSubmit} className="">
                <p>
                    I, Esmond, commit to
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        value={formData.taskName}
                        onChange={handleInputChange}
                        placeholder="52 bpy"
                        className={inputStyles}
                    />
                </p>
                <p>
                    I will start on
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className={inputStyles}
                    /> at <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        className={inputStyles}
                    />,
                </p>
                <p>
                    and I will do it for
                    <input
                        type="number"
                        name="completionPeriod"
                        value={formData.completionPeriod}
                        onChange={handleInputChange}
                        placeholder="30"
                        className={inputStyles}
                    />
                    days
                </p>
                <p>
                    by investing
                    <input
                        type="number"
                        name="durationPerDay"
                        value={formData.durationPerDay}
                        onChange={handleInputChange}
                        placeholder="60"
                        className={inputStyles}
                    />
                    minutes per day on it
                </p>
                <p>
                    on every <input
                        type="text"
                        name="activeDays"
                        value={formData.activeDays}
                        onChange={handleInputChange}
                        placeholder="Monday, Wednesday, Friday"
                        className={inputStyles}
                    />
                </p>
                <p>
                    <textarea
                        name="taskDescription"
                        value={formData.taskDescription}
                        onChange={handleInputChange}
                        placeholder="My motivation is to learn all knowledge there is"
                        className={"border border-gray-200 rounded outline-blue-500 p-2 my-4 w-full h-20 border-top-2 resize-none overflow-hidden"}
                    ></textarea>
                </p>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
            </form>
        </div>
    );
};

export default CreateTask;
