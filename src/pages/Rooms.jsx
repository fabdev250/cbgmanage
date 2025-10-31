import React, { useState } from 'react';
import { Users, Bed, User, GraduationCap, Building2 } from 'lucide-react';

const Rooms = () => {
  const [dormData] = useState({
    boysDorms: [
      {
        id: 1,
        dormName: 'Boys Dormitory A',
        rooms: [
          {
            roomNumber: 'B101',
            capacity: 2,
            students: [
              { name: 'John Smith', class: 'Grade 11 Science', studentId: 'S001' },
              { name: 'Mike Johnson', class: 'Grade 10 Arts', studentId: 'S002' }
            ]
          },
          {
            roomNumber: 'B102',
            capacity: 1,
            students: [
              { name: 'David Wilson', class: 'Grade 12 Commerce', studentId: 'S003' }
            ]
          },
          {
            roomNumber: 'B103',
            capacity: 2,
            students: [
              { name: 'Robert Brown', class: 'Grade 9 General', studentId: 'S004' },
              { name: 'James Davis', class: 'Grade 11 Science', studentId: 'S005' }
            ]
          },
          {
            roomNumber: 'B201',
            capacity: 2,
            students: [
              { name: 'Thomas Miller', class: 'Grade 10 Arts', studentId: 'S006' },
              { name: 'Daniel Garcia', class: 'Grade 12 Science', studentId: 'S007' }
            ]
          }
        ]
      },
      {
        id: 2,
        dormName: 'Boys Dormitory B',
        rooms: [
          {
            roomNumber: 'BB101',
            capacity: 2,
            students: [
              { name: 'Christopher Lee', class: 'Grade 11 Commerce', studentId: 'S008' },
              { name: 'Kevin Martin', class: 'Grade 10 Science', studentId: 'S009' }
            ]
          },
          {
            roomNumber: 'BB102',
            capacity: 1,
            students: [
              { name: 'Brian Clark', class: 'Grade 12 Arts', studentId: 'S010' }
            ]
          }
        ]
      }
    ],
    girlsDorms: [
      {
        id: 1,
        dormName: 'Girls Dormitory A',
        rooms: [
          {
            roomNumber: 'G101',
            capacity: 2,
            students: [
              { name: 'Sarah Johnson', class: 'Grade 11 Science', studentId: 'S101' },
              { name: 'Emily Davis', class: 'Grade 10 Arts', studentId: 'S102' }
            ]
          },
          {
            roomNumber: 'G102',
            capacity: 1,
            students: [
              { name: 'Jessica Brown', class: 'Grade 12 Commerce', studentId: 'S103' }
            ]
          },
          {
            roomNumber: 'G103',
            capacity: 2,
            students: [
              { name: 'Amanda Wilson', class: 'Grade 9 General', studentId: 'S104' },
              { name: 'Sophia Miller', class: 'Grade 11 Science', studentId: 'S105' }
            ]
          }
        ]
      },
      {
        id: 2,
        dormName: 'Girls Dormitory B',
        rooms: [
          {
            roomNumber: 'GB101',
            capacity: 2,
            students: [
              { name: 'Olivia Taylor', class: 'Grade 10 Commerce', studentId: 'S106' },
              { name: 'Emma Anderson', class: 'Grade 12 Science', studentId: 'S107' }
            ]
          },
          {
            roomNumber: 'GB102',
            capacity: 2,
            students: [
              { name: 'Isabella Thomas', class: 'Grade 11 Arts', studentId: 'S108' },
              { name: 'Mia White', class: 'Grade 9 General', studentId: 'S109' }
            ]
          }
        ]
      }
    ]
  });

  const getOccupancyStatus = (room) => {
    const occupied = room.students.length;
    const total = room.capacity;
    const percentage = (occupied / total) * 100;

    if (percentage === 100) return { text: 'Full', color: 'bg-red-100 text-red-800' };
    if (percentage >= 50) return { text: 'Partially Full', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Available', color: 'bg-green-100 text-green-800' };
  };

  const RoomCard = ({ room, dormName }) => {
    const occupancy = getOccupancyStatus(room);

    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200">
        {/* Room Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Room {room.roomNumber}</h3>
              <p className="text-sm text-gray-600">{dormName}</p>
            </div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${occupancy.color}`}>
                {occupancy.text}
              </span>
              <p className="text-xs text-gray-600 mt-1">
                {room.students.length}/{room.capacity} occupied
              </p>
            </div>
          </div>
        </div>

        {/* Students List */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Students Assigned</span>
          </div>
          
          <div className="space-y-3">
            {room.students.map((student, index) => (
              <div key={student.studentId} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm truncate">{student.name}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <GraduationCap className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{student.class}</span>
                  </div>
                  <span className="text-xs text-gray-500">ID: {student.studentId}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty beds indicator */}
          {room.students.length < room.capacity && (
            <div className="mt-3 p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-2">
                <Bed className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-600">
                  {room.capacity - room.students.length} bed(s) available for assignment
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const DormSection = ({ title, dorms, icon, color }) => (
    <div className="mb-8">
      {/* Section Header */}
      <div className={`flex items-center space-x-3 mb-6 p-4 bg-${color}-50 border border-${color}-200 rounded-lg`}>
        <div className={`w-10 h-10 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">
            {dorms.reduce((total, dorm) => total + dorm.rooms.length, 0)} rooms • 
            {dorms.reduce((total, dorm) => total + dorm.rooms.reduce((roomTotal, room) => roomTotal + room.students.length, 0), 0)} students
          </p>
        </div>
      </div>

      {/* Dorm Buildings */}
      <div className="space-y-6">
        {dorms.map((dorm) => (
          <div key={dorm.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Dorm Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">{dorm.dormName}</h3>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                  {dorm.rooms.length} rooms
                </span>
              </div>
            </div>

            {/* Rooms Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {dorm.rooms.map((room) => (
                  <RoomCard key={room.roomNumber} room={room} dormName={dorm.dormName} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Dorm Assignments</h1>
        <p className="text-gray-600">Overview of all student accommodations and room assignments</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">
                {dormData.boysDorms.reduce((total, dorm) => total + dorm.rooms.reduce((roomTotal, room) => roomTotal + room.students.length, 0), 0) +
                 dormData.girlsDorms.reduce((total, dorm) => total + dorm.rooms.reduce((roomTotal, room) => roomTotal + room.students.length, 0), 0)}
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Boys Accommodated</p>
              <p className="text-2xl font-bold text-blue-600">
                {dormData.boysDorms.reduce((total, dorm) => total + dorm.rooms.reduce((roomTotal, room) => roomTotal + room.students.length, 0), 0)}
              </p>
            </div>
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Girls Accommodated</p>
              <p className="text-2xl font-bold text-pink-600">
                {dormData.girlsDorms.reduce((total, dorm) => total + dorm.rooms.reduce((roomTotal, room) => roomTotal + room.students.length, 0), 0)}
              </p>
            </div>
            <User className="w-8 h-8 text-pink-600" />
          </div>
        </div>
      </div>

      {/* Boys Dorms Section */}
      <DormSection
        title="Boys Dormitories"
        dorms={dormData.boysDorms}
        icon={<User className="w-5 h-5 text-blue-600" />}
        color="blue"
      />

      {/* Girls Dorms Section */}
      <DormSection
        title="Girls Dormitories"
        dorms={dormData.girlsDorms}
        icon={<User className="w-5 h-5 text-pink-600" />}
        color="pink"
      />
    </div>
  );
};

export default Rooms;