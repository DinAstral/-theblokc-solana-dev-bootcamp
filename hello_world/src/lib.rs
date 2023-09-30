use solana_program:: {

    account_info::AccountInfo,

    entrypoint::ProgramResult,

    pubkey::Pubkey,

    entrypoint,

    msg

};

 

//declare and export the program's entrypoint

entrypoint!(process_instruction);

 

pub fn process_instruction(

    program_id: &Pubkey,

    accounts: &[AccountInfo],

    instruction_data: &[u8]

) -> ProgramResult {

   

    msg!("{}, {}, {:?}", program_id, accounts.len(), instruction_data);

    Ok(())

}