import DashboardMain from '@/components/DashboardMain';
const page = () => {
    return (

        <DashboardMain>
            <div className=''>
                <div className='' >
                    <table className="table  ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <img className='w-[50px]' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                                </td>
                                <td>
                                    <p>Rumon</p>
                                </td>
                                <td>
                                    <p>Web Developer</p>
                                </td>
                                <td>
                                    <p>Black</p>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <img className='w-[50px]' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                                </td>
                                <td>
                                    <p>Rumon</p>
                                </td>
                                <td>
                                    <p>Web Developer</p>
                                </td>
                                <td>
                                    <p>Black</p>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <img className='w-[50px]' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                                </td>
                                <td>
                                    <p>Rumon</p>
                                </td>
                                <td>
                                    <p>Web Developer</p>
                                </td>
                                <td>
                                    <p>Black</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardMain>

    );
};

export default page;