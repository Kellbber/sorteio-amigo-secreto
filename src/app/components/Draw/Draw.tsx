'use client'
import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import { Participants } from '@/app/shared/interfaces/Participants'
import Card from '../Card/Card'
const Draw = () => {

  const [participants, setParticipants] = useState([] as Participants[])
  const [participant, setParticipant] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParticipant((prevParticipant) => ({
      ...prevParticipant,
      [name]: value,
    }));
  };

  const handleAddParticipant = () => {
    if (participant.name.trim() === '' || participant.number.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const participantToAdd: Participants = {
      name: participant.name,
      number: Number(participant.number),
    };
    setParticipants((prevParticipants) => [...prevParticipants, participantToAdd]);
    setParticipant({
      name: '',
      number: '',
    });
  };



  return (
    <div
      className="bg-page-image bg-cover bc-center h-screen flex items-start justify-center"
      id="sorteio"
    >
      <section className="w-[80vw] flex items-center justify-center pt-8 flex-col">
        <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
          <div className="flex gap-2 flex-col md:flex-row">
            <Input
              label="o nome:"
              name="name"
              value={participant.name}
              onChange={handleInputChange}
            />
            <Input
              label="o número:"
              name="number"
              value={participant.number}
              onChange={handleInputChange}
            />
          </div>
          <Button
            label="Adicionar"
            className="py-2 w-40"
            onClick={handleAddParticipant}
          />
        </div>
     {participants.length>0 && (
         <div className='w-full bg-green-900/70 mt-8 h-[60vh] flex items-start justify-between overflow-y-scroll p-4 flex-wrap'>
          {participants.map((participant,index)=>{
            return(
               <Card
               key={index}
               name={participant.name}
               number={participant.number}
               />
            )
          })}

         </div>

     )}+ 
      </section>
    </div>
  );
};

export default Draw
